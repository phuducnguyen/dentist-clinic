DECLARE @RowCount INT = 1;

WHILE @RowCount <= 10
BEGIN
    INSERT INTO Categories (ID_Category, CategoryName)
    VALUES (@RowCount, 'Category' + CAST(@RowCount AS NVARCHAR(10)));

    SET @RowCount = @RowCount + 1;
END;

