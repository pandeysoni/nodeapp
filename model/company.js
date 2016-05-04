'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

/**
 * @module company
 * @description contain the details of company information, conditions and actions.
 */

var CompanySchema = new Schema({
  name: { type: String },
  numberOfEmployees: { type: Number }
});


CompanySchema.statics = {

     /**
      findOnecompany. return the one company object.
      @param id: get id to find one company by id.
      @param callback: callback of this form.
    */
    get: function(query, callback) {
        this.findOne(query, callback);
    },
    /**
      findcompany. return the company objects.
      @param callback: callback of this form.
    */
    getAll: function(query, callback) {
        this.find(query, callback);
    },
    
    /**
      updatecompany. return the create company object result.
      @param updateData: updateData is use to update company w.r.t id.
      @param callback: callback of this form.
    */
    updateById: function(id, updateData, callback) {
        this.update(id, {$set: updateData}, callback);
    },
    removeById: function(removeData, callback) {
        this.remove(removeData, callback);
    },
    create: function(data, callback) {
        var company = new this(data);
        company.save(callback);
    }
}

var company = mongoose.model('company', CompanySchema);

/** export schema */
module.exports = {
    Company: company
};