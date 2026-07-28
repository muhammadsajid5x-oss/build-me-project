from fastapi import FastAPI

app = FastAPI(title="Build Me Analytics Engine")

@app.get("/health")
def health_check():
    return {"status": "online", "service": "python-analytics"}

@app.get("/api/v1/metrics")
def get_metrics():
    return {"active_users": 0, "total_leads": 0, "conversion_rate": 0.0}