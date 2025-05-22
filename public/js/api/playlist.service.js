const url = "/api/playlists";

const playlistService = {
  getAll: async () => {
    try {
      const res = await fetch(url);
      if (!res.ok) throw new Error("Error al obtener playlists");
      return await res.json();
    } catch (error) {
      console.error(error);
      return null;
    }
  },

  getById: async (id) => {
    try {
      const res = await fetch(`${url}/${id}`);
      if (!res.ok) throw new Error(`Error al obtener playlist con id ${id}`);
      return await res.json();
    } catch (error) {
      console.error(error);
      return null;
    }
  },

  insert: async (data) => {
    try {
      const res = await fetch(url, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (!res.ok) throw new Error("Error al insertar");
      return await res.json();
    } catch (error) {
      console.error(error);
      return null;
    }
  },

  update: async (data) => {
    try {
      const res = await fetch(url, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (!res.ok) throw new Error(`Error al actualizar`);
      return await res.json();
    } catch (error) {
      console.error(error);
      return null;
    }
  },

  delete: async (id) => {
    try {
      const res = await fetch(`${url}/${id}`, {
        method: "DELETE",
      });
      if (!res.ok) throw new Error(`Error al eliminar`);
      return await res.json();
    } catch (error) {
      console.error(error);
      return null;
    }
  },
};

export default playlistService;
