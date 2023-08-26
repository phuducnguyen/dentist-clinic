-- Phát sinh dữ liệu cho bảng Patients
DECLARE @RowCount INT = 1;

WHILE @RowCount <= 100000
BEGIN
    INSERT INTO Patients (ID_Patient, Name, Age, Gender, Phone, Email, Address, Image)
    VALUES (@RowCount, 'Patient' + CAST(@RowCount AS NVARCHAR(10)), 
            RAND() * 80 + 1, 
            CASE WHEN RAND() > 0.5 THEN 'Male' ELSE 'Female' END,
            '1234567890', 'patient' + CAST(@RowCount AS NVARCHAR(10)) + '@example.com', 
            'Address' + CAST(@RowCount AS NVARCHAR(10)), 'image' + CAST(@RowCount AS NVARCHAR(10)) + '.jpg');

    SET @RowCount = @RowCount + 1;
END;

