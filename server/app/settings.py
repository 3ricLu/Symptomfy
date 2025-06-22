from pydantic_settings import BaseSettings, SettingsConfigDict

class Settings(BaseSettings):
    db_usr: str
    db_pwd: str
    db_adr: str
    db_port: int
    db_name: str
    secret_key: str
    issuer: str

    # Disable reading any .env file — only OS env-vars will be used
    model_config = SettingsConfigDict(env_file=None)

    @property
    def database_url(self) -> str:
        # Use the Cloud SQL UNIX socket path in host
        return (
            f"postgresql+psycopg2://"
            f"{self.db_usr}:{self.db_pwd}@/"
            f"{self.db_name}?host={self.db_adr}"
        )

# instantiate
settings = Settings()
