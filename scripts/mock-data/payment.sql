DECLARE @RowCount INT = 1;

WHILE @RowCount <= 100000
BEGIN
    INSERT INTO Payments (ID_Payment, ID_Patient, PaymentDate, TotalAmount, PaidAmount, PaymentType, Note)
    VALUES (@RowCount, CAST(RAND() * 100000 + 1 AS INT), 
            DATEADD(day, -ROUND(RAND() * 365 * 5), GETDATE()), 
            RAND() * 500 + 50, 
            RAND() * 500, 
            CASE WHEN RAND() > 0.5 THEN 'Cash' ELSE 'Card' END,
            'Payment note for payment ' + CAST(@RowCount AS NVARCHAR(10)));

    SET @RowCount = @RowCount + 1;
END;

