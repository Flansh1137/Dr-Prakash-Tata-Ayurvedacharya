
# 🧠 AyurVeda Backend – Django REST API & Database

This is the **backend** of the AyurVeda project, built using Django and Django REST Framework. It provides the API and database logic for the frontend built in ReactJS.

---

## ⚙️ Technologies Used

- **Python 3**
- **Django 5.2**
- **Django REST Framework**
- **SQLite** (Default database for development)
- **CORS Headers** (For frontend-backend integration)

---

## 📁 Folder Structure
AyurBackend/
├── adminpanel/ # Django app (models, views, APIs)
│ ├── models.py # Database models (Product, etc.)
│ ├── views.py # API views
│ ├── serializers.py # Data serialization for REST API
│ └── urls.py # URL routes for APIs
│
├── ayurcore/ # Django project settings
│ ├── settings.py # Installed apps, DB config, etc.
│ └── urls.py # Root URL configuration
│
├── db.sqlite3 # SQLite database
├── manage.py # Django CLI tool


---

## 🔢 Database Setup

- Default DB: `SQLite` (file: `db.sqlite3`)
- Models defined in: `adminpanel/models.py`
- You can switch to PostgreSQL/MySQL later for production

### Example Model

```python
class Product(models.Model):
    name = models.CharField(max_length=100)
    description = models.TextField()
    price = models.DecimalField(max_digits=10, decimal_places=2)
    category = models.CharField(max_length=50)
    stock = models.PositiveIntegerField()
    created_at = models.DateTimeField(auto_now_add=True)


🚀 Running the Backend
# Step 1: Install dependencies
pip install django djangorestframework django-cors-headers

# Step 2: Run migrations
python manage.py makemigrations
python manage.py migrate

# Step 3: Start the development server
python manage.py runserver


