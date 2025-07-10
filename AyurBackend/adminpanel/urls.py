from django.urls import path, include
from .views import ProductViewSet, home
from rest_framework.routers import DefaultRouter

router = DefaultRouter()
router.register(r'products', ProductViewSet)

urlpatterns = [
    path('', home),  # 👈 root page
    path('', include(router.urls)),
]
 