import pandas as pd
import mysql.connector

# Load the generated data from the CSV file
generated_data = pd.read_csv('generated_data.csv')  # Update with your file path

# MySQL database connection parameters
# db_params = {
#     'host': 'your_host',
#     'user': 'your_user',
#     'password': 'your_password',
#     'database': 'your_database'
# }

# Example for my connection
db_params = {
    'host': 'localhost',
    'user': 'mew',
    'password': 'password',
    'database': 'dental_clinic'
}

# Establish a connection to the MySQL database
connection = mysql.connector.connect(**db_params)
cursor = connection.cursor()

# Define the SQL query to insert data into the MySQL table
insert_query = "INSERT INTO patients (patient_id, full_name, age, gender) VALUES (%s, %s, %s, %s)"

# Iterate through the generated data and insert into the database
for index, row in generated_data.iterrows():
    data_tuple = (row['patient_id'], row['full_name'], row['age'], row['gender'])
    cursor.execute(insert_query, data_tuple)

# Commit changes and close the connection
connection.commit()
connection.close()

print(f"Inserted {len(generated_data)} rows into the MySQL database.")
