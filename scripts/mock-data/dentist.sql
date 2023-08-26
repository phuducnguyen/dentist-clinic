DECLARE @RowCount INT = 1;

WHILE @RowCount <= 1000
BEGIN
    INSERT INTO Dentists (ID_Dentist, Name, Specialty, Schedule, ID_Staff)
    VALUES (@RowCount, 'Dentist' + CAST(@RowCount AS NVARCHAR(10)), 
            'Specialty ' + CAST(@RowCount AS NVARCHAR(10)), 
            'Schedule for dentist ' + CAST(@RowCount AS NVARCHAR(10)), 
            CAST(RAND() * 100 + 1 AS INT));

    SET @RowCount = @RowCount + 1;
END;

