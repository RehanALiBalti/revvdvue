import http from "../http-common";

class CarDataService {
  getAll() {
    return http.get("/communities");
  }

  getMakes() {
    return http.get("/communities");
  }

  get(id) {
    return http.get(`/communities/${id}`);
  }

  create(data) {
    return http.post("/communities", data);
  }

  update(id, data) {
    return http.put(`/communities/${id}`, data);
  }

  delete(id) {
    return http.delete(`/communities/${id}`);
  }

  deleteAll() {
    return http.delete(`/communities`);
  }

  getModels(make) {
    return http.get(`/communities/models?make=${make}`);
  }

  getGenerations(model) {
    return http.get(`/communities/generations?model=${model}`);
  }
  getFiltered(
    make,
    model,
    generation,
    classification,
    productionYears,
    countryOfOrigin
  ) {
    return http.get(
      `/communities/filter?make=${make}&model=${model}&generation=${generation}&classification=${classification}&productionYears=${productionYears}&countryOfOrigin=${countryOfOrigin}&`
    );
  }
}

export default new CarDataService();
