const persistTime = 24 * 60 * 60 * 1000; // 1 day

const persistDataPlugin = store => {
  store.subscribe((mutation, state) => {
    // check mutation type
    // time can be updated like so:
    // time.toLocaleString("default", {
    //       hour: "2-digit",
    //       minute: "2-digit",
    //       second: "2-digit",
    //       timeZoneName: "short"
    //     })
    //set in localStorage
    if (mutation.type === "updateServiceDate") {
      let serviceRecord = {
        time: state.lastServiced.toLocaleString("default", {
          hour: "2-digit",
          minute: "2-digit",
          second: "2-digit",
          timeZoneName: "short"
        })
      };
      console.log(serviceRecord);
      try {
        window.localStorage.setItem("last_serviced", serviceRecord.time);
      } catch (error) {
        console.error(error);
      }
    }
  });
  store.subscribeAction((action, state) => {
    console.log(action.type);
    console.log(action.payload);
  });
};

export default persistDataPlugin;
