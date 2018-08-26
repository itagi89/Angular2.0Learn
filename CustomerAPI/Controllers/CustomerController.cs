using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Net.Http.Formatting;
using System.Web.Http;
using CustomerAPI.Models;
using Newtonsoft.Json;

namespace CustomerAPI.Controllers
{
    public class CustomerController : ApiController
    {
        // GET: api/Customer
        public IEnumerable<string> Get()
        {
            return new string[] { "value1", "value2" };
        }

        // GET: api/Customer/5
        public string Get(int id)
        {
            return "value";
        }

        // POST: api/Customer
        public HttpResponseMessage post(List<Customer> customers)
        {
            //IEnumerator<KeyValuePair<string, string>> k = forData.GetEnumerator();
            //k.MoveNext();
            //KeyValuePair<string, string> c = k.Current;
            //string str = c.Key;

            // List<Customer> customers = JsonConvert.DeserializeObject<List<Customer>>(str);
            foreach (var cust in customers)
            {
                cust.CustomerName = cust.CustomerName.ToUpper();
            }
            return Request.CreateResponse(HttpStatusCode.OK, customers);
        }

        // PUT: api/Customer/5
        public void Put(int id, [FromBody]string value)
        {
        }

        // DELETE: api/Customer/5
        public void Delete(int id)
        {
        }
    }
}
