export default {
  updateNewSession(state, new_param) {
    state = { ...state, ...new_param};
    // console.log(new_param);
    console.log(state.multishot_per_hole);
  },
  addAutoloader(state) {
    const obj = {
      position: state.autoloader.length + 1,
      hole_type: "",
      mesh_size: "",
      mesh_material: "",
      protocol: "auto",
    };
    obj.name = "_" + obj.position
    state.autoloader.push(obj);
  },
  deleteAutoloader(state, del_position) {
    state.autoloader = state.autoloader.filter((el)=>{
      return el.position != del_position;
    });
  },
};
