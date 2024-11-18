const BASE_URL = process.env.API_URL || "http://localhost:4000/Regist";

const UsosModels = {
    async getAllUsosModel() {
        try {
            const peticion = await fetch(`${BASE_URL}`);
            const usos = await peticion.json();
            return usos;
        } catch (error) {
            console.log(error);
        }
    },

    async createUsosModel(newUsos) {
        try {
            const peticion = await fetch(`${BASE_URL}`, {
                method: "POST",
                body: JSON.stringify(newUsos),
                headers: { "Content-Type": "application/json" },
            });
            const data = await peticion.json();
            return data;
        } catch (error) {
            console.log(error);
        }
    },

    async updateUsosModel(Usosid, updateUsos) {
        try {
            const url = `${BASE_URL}/${Usosid}`;
            const peticion = await fetch(url, {
                method: "PUT",
                body: JSON.stringify(updateUsos),
                headers: { "Content-Type": "application/json" },
            });
            const data = await peticion.json();
            return data;
        } catch (error) {
            console.log(error);
        }
    },

    async deleteUsosModel(Usosid) {
        try {
            const url = `${BASE_URL}/${Usosid}`;
            const peticion = await fetch(url, { method: "DELETE" });
            const data = await peticion.json();
            return data;
        } catch (error) {
            console.log(error);
        }
    },
};

export default UsosModels;
