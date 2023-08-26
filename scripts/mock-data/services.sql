DECLARE @RowCount INT = 1;

WHILE @RowCount <= 100000
BEGIN
    INSERT INTO Services (ID_Service, ServiceName, Details, Price, Status, ID_Category, ID_Dentist)
    VALUES (@RowCount, 'Service' + CAST(@RowCount AS NVARCHAR(10)), 
            'Details for service ' + CAST(@RowCount AS NVARCHAR(10)), 
            RAND() * 100 + 50, 
            CASE WHEN RAND() > 0.5 THEN 'Active' ELSE 'Inactive' END,
            CAST(RAND() * 10 + 1 AS INT), 
            CAST(RAND() * 1000 + 1 AS INT));

    SET @RowCount = @RowCount + 1;
END;

