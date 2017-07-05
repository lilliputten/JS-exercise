// BEGIN (write your solution here)
export default (backendsListUrl, setCurrentBackendUrl) => {
  return get(backendsListUrl)
  .then(backendsListUrlAsStr => JSON.parse(backendsListUrlAsStr.data))
  .then(ListUrlAsArr => Promise.all(ListUrlAsArr
    .map(e => get(`${e.url}/status`))))
  .then(ListWorkloadServers => {
    const minWorkloadServer = ListWorkloadServers.reduce((acc, e) => {
      const data = JSON.parse(e.data);
      return data.workload < acc.workload ? data : acc;
    }, {workload: Infinity}).url;
    return post(setCurrentBackendUrl, { value: minWorkloadServer });
  })
  .catch(err => console.log("err=",err));
};
// END
