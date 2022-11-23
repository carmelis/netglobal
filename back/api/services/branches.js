const { Branch, Client } = require("../models");

class BranchesService {
  static async getAll() {
    try {
      const response = await Branch.findAll();
      return { error: false, data: response };
    } catch (error) {
      console.error(error);
      return { error: true, data: error };
    }
  }

  static async getSingle(id) {
    try {
      const response = await Branch.findByPk(id);
      return { error: false, data: response };
    } catch (error) {
      console.error(error);
      return { error: true, data: error };
    }
  }

  static async getClientBranches(clientId) {
    try {
      // comprobamos que el cliente existe
      const client = await Client.findByPk(clientId);

      if (!client) {
        return {
          error: true,
          data: {
            status: 405,
            message: `No existe cliente con id ${clientId}`,
          },
        };
      }

      // traemos las sucursales del cliente
      const response = await Branch.findAll({ where: { clientId } });
      return { error: false, data: response };
    } catch (error) {
      console.error(error);
      return { error: true, data: error };
    }
  }

  static async createBranch(body) {
    try {
      const { latitude, longitude } = body;

      // comprobamos que no exista una sucursal con la misma geolocalización
      const branch = await Branch.findOne({
        where: { latitude, longitude },
      });

      if (branch) {
        return {
          error: true,
          data: {
            status: 405,
            message: `Ya existe una sucursal con la misma localización (Coordenadas: ${latitude}, ${longitude})`,
          },
        };
      }

      // creamos la sucursal
      const response = await Branch.create(body);
      return { error: false, data: response };
    } catch (error) {
      console.error(error);
      return { error: true, data: error };
    }
  }

  static async updateBranch(id, body) {
    try {
      // comprobamos si existe la sucursal
      const branch = await Branch.findByPk(id);

      if (!branch) {
        return {
          error: true,
          data: {
            status: 405,
            message: `No existe la sucursal con id ${id}`,
          },
        };
      }

      // actualizamos la sucursal
      const [affectedRows, updatedBranch] = await Branch.update(body, {
        where: { id },
        returning: true, //para que devuelva algo el update
      });
      return { error: false, data: updatedBranch[0] };
    } catch (error) {
      console.error(error);
      return { error: true, data: error };
    }
  }

  static async deleteBranch(id) {
    try {
      // comprobamos si existe la sucursal
      const branch = await Branch.findByPk(id);

      if (!branch) {
        return {
          error: true,
          data: {
            status: 405,
            message: `No existe la sucursal con id ${id}`,
          },
        };
      }

      // eliminamos la sucursal
      const response = await Branch.destroy({ where: { id } });
      return { error: false, data: response };
    } catch (error) {
      console.error(error);
      return { error: true, data: error };
    }
  }
}

module.exports = BranchesService;
