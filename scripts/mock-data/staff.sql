DECLARE @RowCount INT = 1;

WHILE @RowCount <= 100
BEGIN
    INSERT INTO Staff (ID_Staff, Name, Position, Birthdate, Gender, Phone, Email, Address)
    VALUES (@RowCount, 'Staff' + CAST(@RowCount AS NVARCHAR(10)), 
            'Position ' + CAST(@RowCount AS NVARCHAR(10)), 
            DATEADD(day, -ROUND(RAND() * 365 * 30), GETDATE()), 
            CASE WHEN RAND() > 0.5 THEN 'Male' ELSE 'Female' END,
            '1234567890', 'staff' + CAST(@RowCount AS NVARCHAR(10)) + '@example.com', 
            'Address' + CAST(@RowCount AS NVARCHAR(10)));

    SET @RowCount = @RowCount + 1;
END;

