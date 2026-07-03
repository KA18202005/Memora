from app.database.mongodb import db


def global_search(user_id: str, query: str):

    query = query.strip()

    if not query:

        return {

            "documents": [],

            "topics": []

        }

    documents = list(

        db.documents.find(

            {

                "user_id": user_id,

                "title": {

                    "$regex": query,

                    "$options": "i"

                }

            },

            {

                "_id": 1,

                "title": 1

            }

        )

    )

    for doc in documents:

        doc["id"] = str(doc["_id"])

        del doc["_id"]

    topics = db.topics.distinct(

        "topic",

        {

            "user_id": user_id,

            "topic": {

                "$regex": query,

                "$options": "i"

            }

        }

    )

    return {

        "documents": documents,

        "topics": topics

    }