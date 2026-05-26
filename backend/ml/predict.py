import mlflow
import mlflow.xgboost
from dotenv import load_dotenv
import os

MODEL_URI = os.environ.get("MODEL_URI")
URI = os.environ.get("URI")

# defines where mlflow logs the experiment info
mlflow.set_tracking_uri(URI)
# load the model using the saved model from the artifact path
model_uri = MODEL_URI
# load trained model in the model variable
model = mlflow.xgboost.load_model(model_uri)  

def make_predictions(data):
    pred = model.predict_proba(data)
    return pred[0][1]
