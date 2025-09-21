# ProctorMate - ER Diagram, Database Design & Architecture

## 1. Entity Relationship (ER) Diagram

**Entities:**
- **Admin**
- **Allocation**

**Relationships:**
- An Admin can create multiple Allocations.
- Each Allocation contains a list of Teachers (as strings).

```
[Admin] 1---* [Allocation]
```

**ER Diagram (Textual):**

```
+----------------+         +-------------------+
|    Admin       |         |   Allocation      |
+----------------+         +-------------------+
| _id (PK)       |         | _id (PK)          |
| collegeName    |         | date              |
| email (unique) |         | hall              |
| password       |         | teachers [array]  |
+----------------+         +-------------------+
         |                        ^
         |                        |
         +------------------------+
                creates
```

## 2. Database Design

### **Admin Schema**
- `_id`: ObjectId (Primary Key)
- `collegeName`: String (Required)
- `email`: String (Required, Unique)
- `password`: String (Required)
- `timestamps`: CreatedAt, UpdatedAt

### **Allocation Schema**
- `_id`: ObjectId (Primary Key)
- `date`: Date (Required)
- `hall`: String (Required)
- `teachers`: Array of Strings (Required)
- `timestamps`: CreatedAt, UpdatedAt

**Note:** Teachers are stored as strings, not as a separate entity.

## 3. Normalization & Denormalization

### **Normalization**
- The database is normalized to 2NF:
  - Each entity has its own collection (Admin, Allocation).
  - No redundant data in Admin or Allocation.
  - Teachers are stored as an array in Allocation (not a separate table).

### **Denormalization**
- Teachers are embedded as an array of strings in Allocation for simplicity and fast access.
- No separate Teacher entity, which avoids joins and improves read performance for allocation queries.

## 4. Architecture / Design Pattern

### **Backend Architecture**
- **MVC Pattern**:
  - **Models**: Mongoose schemas for Admin and Allocation.
  - **Controllers**: Handle business logic (auth, allocation).
  - **Routes**: Define API endpoints.
  - **Middleware**: Auth, CORS, body parsing.
  - **Database**: MongoDB via Mongoose.

### **Frontend Architecture**
- **Component-Based** (React):
  - **App.jsx**: Routing and layout.
  - **Components/**: Reusable UI elements.
  - **Context/**: Global state (auth).
  - **Hooks/**: Custom logic (useAuth).
  - **Pages/**: Home, Dashboard, Allocate, etc.

## 5. Data Flow & Processing

### **User Authentication Flow**
1. Admin signs up/logs in via frontend form.
2. Credentials sent to backend via Axios.
3. Backend validates, hashes password, generates JWT.
4. JWT returned to frontend, stored in localStorage.
5. Auth state managed via React Context.

### **Allocation Flow**
1. Admin creates allocation (date, hall, teachers).
2. Frontend sends allocation data to backend.
3. Backend saves allocation in MongoDB.
4. Allocations fetched via API for dashboard display.
5. PDF generation uses fetched allocations.

### **Protected Routes**
- Frontend checks for JWT in localStorage.
- If absent, redirects to login.
- Backend verifies JWT for protected API endpoints.

---

## 6. Summary Table

| Entity      | Fields                                      | Relationships         | Normalization | Denormalization |
|-------------|---------------------------------------------|-----------------------|---------------|-----------------|
| Admin       | _id, collegeName, email, password, timestamps | 1-to-Many with Allocation | 2NF          | None            |
| Allocation  | _id, date, hall, teachers[], timestamps     | Many-to-1 with Admin  | 2NF           | Teachers embedded|

---

**This file summarizes the ER diagram, database design, normalization/denormalization, architecture, and data flow for ProctorMate.**