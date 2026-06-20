from sentence_transformers import SentenceTransformer

model = SentenceTransformer(
    "all-MiniLM-L6-v2"
)

def generate_embedding(text):

    return model.encode(
        text
    ).tolist()
    

vector = generate_embedding(
    "FastAPI is a Python framework"
)

print(len(vector))