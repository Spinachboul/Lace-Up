from flask import Flask, render_template, request
import pandas as pd
from sklearn.metrics.pairwise import cosine_similarity
from sklearn.preprocessing import MultiLabelBinarizer

app = Flask(__name__)

# Example data of sports players
data = {
    'Player': ['John', 'Emma', 'Michael', 'Sophia'],
    'Sports': [['Football', 'Basketball'], ['Soccer', 'Tennis'], ['Basketball', 'Baseball'], ['Soccer']],
    'Football Skill': [8, 7, 6, 9],
    'Basketball Skill': [9, 6, 8, 7],
    'Soccer Skill': [7, 9, 8, 6],
    'Tennis Skill': [6, 8, 7, 9],
    'Baseball Skill': [5, 7, 6, 8],
    'Age': [25, 30, 22, 28],
    # Add more player attributes as needed
}
sports_df = pd.DataFrame(data)

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/matchmaking', methods=['GET', 'POST'])
def matchmaking():
    global sports_df  # Access the global sports_df variable
    
    if request.method == 'POST':
        user_sports = request.form.getlist('sports')
        user_age = int(request.form['age'])
        user_skill_levels = {sport: int(request.form.get(f'{sport}_skill')) for sport in user_sports}

        # Prepare user's profile data
        user_profile = {
            'Player': 'Mridul',
            'Sports': user_sports,
            'Age': user_age
        }

        # Matchmaking Process
        user_skills = [user_skill_levels.get(sport, 0) for sport in ['Football', 'Basketball', 'Soccer', 'Tennis', 'Baseball']]
        user_profile_skills = pd.DataFrame([user_skills], columns=['Football Skill', 'Basketball Skill', 'Soccer Skill', 'Tennis Skill', 'Baseball Skill'])

        # Calculate similarity scores
        mlb = MultiLabelBinarizer()
        encoded_sports = mlb.fit_transform(sports_df['Sports'])
        encoded_user_sports = mlb.transform([user_sports])

        similarity_scores = cosine_similarity([user_skills], encoded_sports).flatten()
        sports_df['Similarity'] = similarity_scores
        sports_df['Age Difference'] = abs(sports_df['Age'] - user_age)

        # Sorting players by similarity and age difference
        sports_df = sports_df.sort_values(by=['Similarity', 'Age Difference'], ascending=[False, True])

        # Display top matches
        matched_players = sports_df[['Player', 'Age', 'Sports', 'Similarity']].head(5)  # Keep relevant columns only
        return render_template('matchmaking.html', user_profile=user_profile, matched_players=matched_players)

    return render_template('matchmaking.html')

if __name__ == '__main__':
    app.run(debug=True)
 