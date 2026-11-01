# Bible app

A Next.js Bible reader with chapter navigation, a dictionary, and search by meaning. Scripture and search come from
[bible-api](../bible-api), which replaced the old `django-bible` and `elastic-lambda` services.

```bash
# in ../bible-api
docker compose up -d db
.venv/bin/python manage.py runserver 8010

# here
npm install
cp .env.example .env.local
npm run dev
```

Open http://localhost:3000. `BIBLE_TRANSLATION` picks the translation (`kjv` by default). Claude reranks search
results when `ANTHROPIC_API_KEY` is set on bible-api; without it, search still works.

`Dockerfile` builds a standalone production image.
