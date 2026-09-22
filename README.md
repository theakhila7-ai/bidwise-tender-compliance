# BidWise

BidWise is a presentation-ready prototype for an AI-assisted, evidence-led bid compliance verification workspace.

BidWise gives officers a traceable first-level compliance review: tender requirements, bidder evidence, risk flags, and a human-review handoff. The interface includes a polished sample case for an uninterrupted demo and connects to the included FastAPI service for actual PDF processing.

## Run the demo interface

Open `index.html` in a browser and select **See a demo**. No server is required for this path.

## Run locally with PDF analysis

From this folder:

```powershell
py -m pip install -r requirements.txt
py -m uvicorn backend.main:app --reload --port 8000
```

In a second terminal:

```powershell
py -m http.server 5500
```

Then open `http://127.0.0.1:5500`. Upload a tender and one or more bidder PDFs, then start the compliance review. The browser automatically uses the FastAPI service at port 8000 during this local setup.

## Deploy on Render

This repository includes a `render.yaml` Blueprint. It deploys the FastAPI service and the frontend together, so no separate API URL or production CORS change is required.

1. Push this folder to a GitHub repository.
2. In Render, select **New** -> **Blueprint**, then connect the repository.
3. Review the generated service and choose **Apply**.
4. When the build completes, open the generated Render URL. The website and `/docs` API documentation will be served from the same domain.

Before using real procurement data, implement the production controls listed in the documentation pack: authentication, restricted CORS origins, file validation, retention controls, encrypted storage and audit logging.

## Current analysis scope

The included backend demonstrates requirement extraction and evidence mapping for 24-port managed Gigabit switches, Wi-Fi 6 access points, warranty duration, and on-site technical support. The design keeps a clear human-review boundary: BidWise supports an officer's decision and does not make the final procurement decision.
