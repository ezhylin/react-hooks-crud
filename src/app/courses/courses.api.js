import { http } from "../../core";

export const coursesApi = {
  _url: '/courses',

  getList() {
    return http.get(this._url);
  },

  getById(courseId) {
    return http.get(`${this._url}/${courseId}`);
  },

  create(course) {
    return http.post(this._url, {
      body: course
    });
  },

  update(courseId, course) {
    return http.put(`${this._url}/${courseId}`, {
      body: course
    })
  },

  delete(courseId) {
    return http.delete(`${this._url}/${courseId}`);
  },
}