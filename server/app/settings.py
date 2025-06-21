from pydantic_settings import BaseSettings

class Settings(BaseSettings):
      db_usr: str
      db_pwd: str
      db_adr: str
      db_port: int
      db_name: str
      
      @property
      def database_url(self) -> str:
            return f"postgresql://{self.db_usr}:{self.db_pwd}@{self.db_adr}:{self.db_port}/{self.db_name}"
            
      class Config:
            env_file = ".env"
            

settings = Settings()
