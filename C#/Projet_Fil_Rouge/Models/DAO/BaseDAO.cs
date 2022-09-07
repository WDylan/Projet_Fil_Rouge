﻿using Microsoft.Data.SqlClient;


namespace APIAspNetCore.Models.DAO
{
    public abstract class BaseDAO<T>
    {
        protected static SqlCommand _command;
        protected static SqlConnection _connection;
        protected static SqlDataReader _reader;
        protected static string _request;

        public abstract int Create(T element);
        public abstract bool Delete(int id);
        public abstract bool Delete(T element);
        public abstract bool Update(T element);

        public abstract T Find(int index);
        public abstract List<T> Find(Func<T, bool> criteria);
        public abstract List<T> FindAll();
    }
}
