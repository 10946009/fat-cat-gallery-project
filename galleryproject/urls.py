"""galleryproject URL Configuration

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/4.0/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from django.contrib import admin
from django.urls import path
from galleryapp import views
from django.conf import settings
from django.conf.urls.static import static

urlpatterns = [
    path('', views.login),
    path('logout/', views.logout),
    path('signin/', views.signin),
    path('photo/', views.photoshow),
    path('album/', views.albumshow),
    path('favorite/', views.favoriteshow),
    path('trash/', views.trashshow),
    path('admin/', admin.site.urls),
    path('uploadphoto/', views.addphoto),
    path('photoshow/<int:photoid>/', views.singlephotoshow),
    path('handleFavorite/<int:photoid>/', views.handleFavorite),
    path('handleTrash/<int:photoid>/', views.handleTrash),
    path('deleteTrashPhoto/<int:photoid>/', views.deleteTrashPhoto),
    path('deleteAllTrashPhoto/', views.deleteAllTrashPhoto),
    path('uploadalbum/', views.addalbum), # 上傳album
    path('handleAlbum/<int:photoid>/', views.handleAlbum),
    path('albumshow/<int:albumid>/', views.intoalbum),
    path('handleleavealbum/<int:photoid>/', views.handleLeaveAlbum),
    path('handleAlbum/', views.deleteAlbum),
]
urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
