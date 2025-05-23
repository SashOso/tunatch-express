# 🎵 Tuneatch

Tuneatch es una plataforma intuitiva y dinámica diseñada para organizar, explorar y personalizar tu colección musical. Desde la creación de playlists hasta la gestión de álbumes, artistas y canciones, Tuneatch te ofrece las herramientas necesarias para tener el control total de tu biblioteca musical, todo desde un solo lugar.

## 🗃️ Estructura de Base de Datos

- **user** (`id`, `username`, `password`, `profile_picture`)
- **role** (`id`, `name`)
- **user_role** (`user_id`, `role_id`)
- **artist** (`id`, `name`, `image_path`)
- **album** (`id`, `title`, `artist_id`, `image_path`)
- **genre** (`id`, `name`)
- **song** (`id`, `title`, `artist_id`, `album_id`, `genre_id`, `file_path`, `image_path`)
- **playlist** (`id`, `name`, `user_id`, `image_path`)
- **playlist_song** (`playlist_id`, `song_id`)
- **favorite_playlist** (`user_id`, `playlist_id`)
- **favorite_album** (`user_id`, `album_id`)


### 🧑‍💼 Autenticación
| Método | Endpoint             | Descripción                 |
|--------|----------------------|-----------------------------|
| POST   | `/api/auth/register` | Registrar un nuevo usuario |
| POST   | `/api/auth/login`    | Iniciar sesión              |
| POST   | `/api/auth/me`       | Obtener usuario actual      |

### 👥 Usuarios
| Método | Endpoint         | Descripción                   |
|--------|------------------|-------------------------------|
| GET    | `/api/users`     | Obtener todos los usuarios    |
| GET    | `/api/users/{id}`| Obtener usuario por ID        |
| PUT    | `/api/users`     | Actualizar usuario            |
| DELETE | `/api/users/{id}`| Eliminar usuario              |

### 🔐 Roles
| Método | Endpoint         | Descripción                  |
|--------|------------------|------------------------------|
| GET    | `/api/roles`     | Obtener todos los roles      |
| GET    | `/api/roles/{id}`| Obtener rol por ID           |
| POST   | `/api/roles`     | Crear un nuevo rol           |
| PUT    | `/api/roles`     | Actualizar rol               |
| DELETE | `/api/roles/{id}`| Eliminar rol                 |

### 🎤 Artistas
| Método | Endpoint           | Descripción                    |
|--------|--------------------|--------------------------------|
| GET    | `/api/artists`     | Obtener todos los artistas     |
| GET    | `/api/artists/{id}`| Obtener artista por ID         |
| POST   | `/api/artists`     | Crear nuevo artista            |
| PUT    | `/api/artists`     | Actualizar artista             |
| DELETE | `/api/artists/{id}`| Eliminar artista               |

### 💿 Álbumes
| Método | Endpoint         | Descripción               |
|--------|------------------|---------------------------|
| GET    | `/api/albums`    | Obtener todos los álbumes |
| GET    | `/api/albums/{id}`| Obtener álbum por ID     |
| POST   | `/api/albums`    | Crear álbum               |
| PUT    | `/api/albums`    | Actualizar álbum          |
| DELETE | `/api/albums/{id}`| Eliminar álbum           |

### 🎧 Canciones
| Método | Endpoint         | Descripción              |
|--------|------------------|--------------------------|
| GET    | `/api/songs`     | Obtener todas las canciones |
| GET    | `/api/songs/{id}`| Obtener canción por ID      |
| POST   | `/api/songs`     | Crear canción               |
| PUT    | `/api/songs`     | Actualizar canción          |
| DELETE | `/api/songs/{id}`| Eliminar canción           |

### 📂 Playlists
| Método | Endpoint           | Descripción               |
|--------|--------------------|---------------------------|
| GET    | `/api/playlists`   | Obtener todas las playlists |
| GET    | `/api/playlists/{id}`| Obtener playlist por ID |
| POST   | `/api/playlists`   | Crear playlist            |
| PUT    | `/api/playlists`   | Actualizar playlist       |
| DELETE | `/api/playlists/{id}`| Eliminar playlist       |

### 📤 Subida de archivos
| Método | Endpoint                   | Key     | Descripción                   |
| ------ | -------------------------- | ------- | ----------------------------- |
| POST   | `/api/upload/song/media`   | `media` | Subir audio para una canción  |
| POST   | `/api/upload/song/image`   | `image` | Subir imagen para una canción |
| POST   | `/api/upload/artist/image` | `image` | Subir imagen para un artista  |
| POST   | `/api/upload/album/image`  | `image` | Subir imagen para un álbum    |
| POST   | `/api/upload/user/image`   | `image` | Subir imagen para un usuario  |


## 🚀 Instalación y ejecución

1. Clona el repositorio:
   ```bash
   git clone https://github.com/SashOso/tunatch-express.git
   cd tunatch-express
