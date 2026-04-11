import mlflow
import mlflow.xgboost

# defines where mlflow logs the experiment info
mlflow.set_tracking_uri("sqlite:////Users/hussaintaheri/Desktop/sports-win-predictor/notebooks/mlflow.db")
# load the model using the saved model from the artifact path
model_uri = "/Users/hussaintaheri/Desktop/sports-win-predictor/notebooks/mlruns/0/models/m-7803c49ebe16446086109029a45020a9/artifacts/"
# load trained model in the model variable
model = mlflow.xgboost.load_model(model_uri)  

def make_predictions(data):
    pred = model.predict_proba(data)
    return pred[0][1]
