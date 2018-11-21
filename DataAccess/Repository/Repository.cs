
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections;
using System.Collections.Generic;
using System.Linq;
using System.Linq.Expressions;

namespace colorbox
{
    public class Repository : IRepository
    {
        private readonly ColorBoxDbContext _dbContext;
        public Repository(ColorBoxDbContext dbContext)
        {
            this._dbContext = dbContext;
        }

        public List<T> GetAll<T>() where T : class
        {
            return _dbContext.Set<T>().ToList();
        }

        public IQueryable<T> GetQuery<T>() where T : class
        {
            return _dbContext.Set<T>();
        }
        public T GetOne<T>(Expression<Func<T, bool>> filter = null) where T : class
        {
            return _dbContext.Set<T>().Where(filter).SingleOrDefault();
        }

        public T GetFirst<T>(Expression<Func<T, bool>> filter = null) where T : class
        {
            return _dbContext.Set<T>().Where(filter).FirstOrDefault();
        }

        public List<T> GetAll<T>(Expression<Func<T, bool>> filter = null) where T : class
        {
            return _dbContext.Set<T>().Where(filter).ToList();
        }


        public void Add<T>(T entity) where T : class
        {
            _dbContext.Set<T>().Add(entity);
        }

        public void AddRange<T>(List<T> entities) where T : class
        {
            _dbContext.Set<T>().AddRange(entities);
        }
        public void DeleteAll<T>(Expression<Func<T, bool>> filter = null) where T : class
        {
            var itemsToDelete = _dbContext.Set<T>().Where(filter).ToList();
            _dbContext.RemoveRange(itemsToDelete);
        }

        public void SaveChanges()
        {
            _dbContext.SaveChanges();
        }
    }
}