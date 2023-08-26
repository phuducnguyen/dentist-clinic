-- Tạo bảng Bệnh Nhân
CREATE TABLE Patients (
    ID_Patient INT PRIMARY KEY,
    Name NVARCHAR(50) NOT NULL,
    Age INT,
    Gender NVARCHAR(10),
    Phone NVARCHAR(20),
    Email NVARCHAR(50),
    Address NVARCHAR(100),
    Image NVARCHAR(100)
);

-- Tạo bảng Dịch Vụ
CREATE TABLE Services (
    ID_Service INT PRIMARY KEY,
    ServiceName NVARCHAR(100) NOT NULL,
    Details NVARCHAR(MAX),
    Price DECIMAL(18, 2),
    Status NVARCHAR(20),
    ID_Category INT,
    ID_Dentist INT,
    FOREIGN KEY (ID_Category) REFERENCES Categories(ID_Category),
    FOREIGN KEY (ID_Dentist) REFERENCES Dentists(ID_Dentist)
);

-- Tạo bảng Danh Mục
CREATE TABLE Categories (
    ID_Category INT PRIMARY KEY,
    CategoryName NVARCHAR(50) NOT NULL
);

-- Tạo bảng Nha Sĩ
CREATE TABLE Dentists (
    ID_Dentist INT PRIMARY KEY,
    Name NVARCHAR(50) NOT NULL,
    Specialty NVARCHAR(100),
    Schedule NVARCHAR(MAX),
    ID_Staff INT,
    FOREIGN KEY (ID_Staff) REFERENCES Staff(ID_Staff)
);

-- Tạo bảng Nhân Viên
CREATE TABLE Staff (
    ID_Staff INT PRIMARY KEY,
    Name NVARCHAR(50) NOT NULL,
    Position NVARCHAR(50),
    Birthdate DATE,
    Gender NVARCHAR(10),
    Phone NVARCHAR(20),
    Email NVARCHAR(50),
    Address NVARCHAR(100)
);

-- Tạo bảng Thanh Toán
CREATE TABLE Payments (
    ID_Payment INT PRIMARY KEY,
    ID_Patient INT,
    PaymentDate DATE,
    TotalAmount DECIMAL(18, 2),
    PaidAmount DECIMAL(18, 2),
    PaymentType NVARCHAR(20),
    Note NVARCHAR(MAX),
    FOREIGN KEY (ID_Patient) REFERENCES Patients(ID_Patient)
);

-- Tạo bảng Thuốc
CREATE TABLE Medicines (
    ID_Medicine INT PRIMARY KEY,
    MedicineName NVARCHAR(100) NOT NULL,
    Dosage NVARCHAR(50),
    Usage NVARCHAR(MAX),
    Price DECIMAL(18, 2),
    AvailableQuantity INT
);

-- Tạo bảng Yêu Cầu Hẹn
CREATE TABLE AppointmentRequests (
    ID_Request INT PRIMARY KEY,
    ID_Patient INT,
    RequestDate DATE,
    Note NVARCHAR(MAX),
    FOREIGN KEY (ID_Patient) REFERENCES Patients(ID_Patient)
);

-- Ràng buộc toàn vẹn cho bảng Patients
ALTER TABLE Patients
ADD CONSTRAINT PK_Patients PRIMARY KEY (ID_Patient);

-- Ràng buộc toàn vẹn cho bảng Services
ALTER TABLE Services
ADD CONSTRAINT PK_Services PRIMARY KEY (ID_Service),
ADD CONSTRAINT FK_Services_Category FOREIGN KEY (ID_Category) REFERENCES Categories(ID_Category),
ADD CONSTRAINT FK_Services_Dentist FOREIGN KEY (ID_Dentist) REFERENCES Dentists(ID_Dentist);

-- Ràng buộc toàn vẹn cho bảng Categories
ALTER TABLE Categories
ADD CONSTRAINT PK_Categories PRIMARY KEY (ID_Category);

-- Ràng buộc toàn vẹn cho bảng Dentists
ALTER TABLE Dentists
ADD CONSTRAINT PK_Dentists PRIMARY KEY (ID_Dentist),
ADD CONSTRAINT FK_Dentists_Staff FOREIGN KEY (ID_Staff) REFERENCES Staff(ID_Staff);

-- Ràng buộc toàn vẹn cho bảng Staff
ALTER TABLE Staff
ADD CONSTRAINT PK_Staff PRIMARY KEY (ID_Staff);

-- Ràng buộc toàn vẹn cho bảng Payments
ALTER TABLE Payments
ADD CONSTRAINT PK_Payments PRIMARY KEY (ID_Payment),
ADD CONSTRAINT FK_Payments_Patient FOREIGN KEY (ID_Patient) REFERENCES Patients(ID_Patient);

-- Ràng buộc toàn vẹn cho bảng Medicines
ALTER TABLE Medicines
ADD CONSTRAINT PK_Medicines PRIMARY KEY (ID_Medicine);

-- Ràng buộc toàn vẹn cho bảng AppointmentRequests
ALTER TABLE AppointmentRequests
ADD CONSTRAINT PK_AppointmentRequests PRIMARY KEY (ID_Request),
ADD CONSTRAINT FK_AppointmentRequests_Patient FOREIGN KEY (ID_Patient) REFERENCES Patients(ID_Patient);

-- Ràng buộc toàn vẹn cho giới tính bệnh nhân
ALTER TABLE Patients
ADD CONSTRAINT CK_Patients_Gender CHECK (Gender IN ('Male', 'Female', 'Other'));

-- Ràng buộc toàn vẹn cho loại thanh toán
ALTER TABLE Payments
ADD CONSTRAINT CK_Payments_PaymentType CHECK (PaymentType IN ('Cash', 'Card'));
