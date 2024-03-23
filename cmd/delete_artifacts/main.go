package main

import (
	"context"
	"log"
	"log/slog"
	"os"

	"github.com/google/go-github/v60/github"
)

func main() {
	ctx := context.Background()
	client := github.NewClient(nil).WithAuthToken(os.Getenv("GITHUB_TOKEN"))
	var repos []*github.Repository
	page := 1
	for {
		r, res, err := client.Repositories.ListByAuthenticatedUser(ctx, &github.RepositoryListByAuthenticatedUserOptions{
			Type: "owner",
			ListOptions: github.ListOptions{
				Page:    page,
				PerPage: 10,
			},
		})
		if err != nil {
			log.Fatal(err)
		}
		if res == nil || res.NextPage == 0 || r == nil {
			break
		}
		page = res.NextPage
		repos = append(repos, r...)
	}

	for _, repo := range repos {
		slog.Info("Processing repo", slog.String("repo", *repo.Name), slog.String("owner", *repo.Owner.Login))
		page := 1
		for {
			artifacts, res, err := client.Actions.ListArtifacts(ctx, *repo.Owner.Login, *repo.Name, &github.ListOptions{
				PerPage: 10,
				Page:    page,
			})
			if err != nil {
				slog.Error("Error listing artifacts", slog.String("repo", *repo.Name), slog.String("owner", *repo.Owner.Login), slog.Any("error", err))
			}
			if res == nil || res.NextPage == 0 || artifacts == nil {
				break
			}
			page = res.NextPage

			for _, artifact := range artifacts.Artifacts {
				slog.Info("Trying to delete artifact for repo",
					slog.String("repo", *repo.Name),
					slog.String("owner", *repo.Owner.Login),
					slog.String("artifact", *artifact.Name),
				)
				_, err := client.Actions.DeleteArtifact(ctx, *repo.Owner.Login, *repo.Name, *artifact.ID)
				if err != nil {
					slog.Error("Error deleting artifact", slog.String("repo", *repo.Name), slog.String("owner", *repo.Owner.Login), slog.String("artifact", *artifact.Name), slog.Any("error", err))
				}
			}
		}
	}
}
