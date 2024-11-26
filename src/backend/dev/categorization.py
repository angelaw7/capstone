import pandas as pd
import pickle


with open("./model/model.pkl", "rb") as f:
    model = pickle.load(f)

with open("./model/vectorizer.pkl", "rb") as f:
    vectorizer = pickle.load(f)

with open("./model/label_encoder.pkl", "rb") as f:
    label_encoder = pickle.load(f)


def categorize(items: pd.DataFrame):
    items_transformed = vectorizer.transform(items["name"])
    y_pred = model.predict(items_transformed)
    predicted_categories = label_encoder.inverse_transform(y_pred)

    items["category"] = predicted_categories
    return items
