using System;
using System.Collections.Generic;
using System.Linq;
using System.Linq.Expressions;

namespace colorbox
{
    public interface IRepository
    {
        List<T> GetAll<T>() where T : class;
        List<T> GetAll<T>(Expression<Func<T, bool>> filter = null) where T : class;
        IQueryable<T> GetQuery<T>() where T : class;

        T GetOne<T>(Expression<Func<T, bool>> filter = null) where T : class;
        T GetFirst<T>(Expression<Func<T, bool>> filter = null) where T : class;
        void DeleteAll<T>(Expression<Func<T, bool>> filter = null) where T : class;

        void SaveChanges();
        void Add<T>(T entity) where T : class;
        void AddRange<T>(List<T> entities) where T : class;
    }
}