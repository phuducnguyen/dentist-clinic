import random
import pandas as pd

# Load your existing mock data from the CSV file
existing_data = pd.read_csv('patients_data.csv')  # Update with your file path

# Generate new rows through randomization of existing data
generated_data = pd.DataFrame(columns=existing_data.columns)
desired_rows = 100000

while len(generated_data) < desired_rows:
    # Randomly select an index from the existing data
    random_index = random.randint(0, len(existing_data) - 1)
    
    # Get a random row from the existing data
    random_row = existing_data.iloc[random_index].copy()
    
    # Modify the patient_id (assuming it's the first column)
    random_row.iloc[0] = len(generated_data) + 1
    
    # Append the modified row to the generated data
    generated_data = generated_data._append(random_row, ignore_index=True)

# Save the generated data to a new CSV file
# You might to rename data to make it meaning
generated_data.to_csv('generated_data.csv', index=False)  # Update with your desired file name

print(f"Generated {len(generated_data)} rows of data.")
