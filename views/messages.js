exports.by_to = {  
    map: function(doc) {
      if (doc.to) {
        emit(doc.to, {_id: doc._id});
      }
    }
  };
  exports.by_to_createdAt = {  
    map: function(doc) {
      if (doc.to && doc.createdAt) {
        emit([doc.to, doc.createdAt], {_id: doc._id});
      }
    }
  };