
### Browser compatibility warning:

The image for the UserDetails component uses the css aspect-ratio property in order to keep the image properly circular regardless of the image's inherent aspect ratio. This css property is still quite new and not widely supported, but will work fine on chrome. Worst case scenario will be the user uploads a non-square image and it renders as an oval on browsers that don't support the feature yet.

### Data object shapes

GET 'api/v1/user/:id' will return the following object:

```
[
    {
        "id": 2,
        "firstName": "Justin",
        "lastName": "Cole",
        "userImage": "Image goes here",
        "totalXp": 0,
        "pw": "abc123",
        "habits": [
            {
                "id": 2,
                "title": "coding",
                "description": "6 hours, 5 days a week.",
                "habitIcon": "some icon",
                "totalGoalCount": 0,
                "priority": 1,
                "goalCount": 0
            },
            {
                "id": 3,
                "title": "exercising",
                "description": "1hr, 4 days a week.",
                "habitIcon": "some icon",
                "totalGoalCount": 0,
                "priority": 1,
                "goalCount": 0
            }
        ]
    }
]
```

POST 'api/v1/habit' accepts a json

```
{
    "userId": "2",
    "title": "running",
    "description": "30min a day",
    "habitIcon": "some icon",
    "totalGoalCount": 0,
    "priority": 2,
    "goalCount": 0
}
```

