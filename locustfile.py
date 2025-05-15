from locust import HttpUser, task, between

class IndicatorUser(HttpUser):
    wait_time = between(1, 2)  # waktu tunggu antar request (opsional)

    @task
    def get_indicators(self):
        self.client.get("/indicators?country=Indonesia&indicator=GDP&page=1&limit=10&sort_by=Country_Name&order=desc")