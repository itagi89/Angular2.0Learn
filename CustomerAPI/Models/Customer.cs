using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace CustomerAPI.Models
{

    public class Customer
    {
        public string CustomerName { get; set; }

        public string CustomerCode { get; set; }

        public string CustomerType { get; set; }

        public double CustomerAmount { get; set; }
    }
}