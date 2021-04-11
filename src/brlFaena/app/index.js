export const setIngresoUseCase = async (props) => {
  const { getRefIngresoById, getClienteByRef, idIngreso, refCliente } = props;

  const refIngreso = getRefIngresoById({ idIngreso });
  const { nombre } = await getClienteByRef(refCliente);

  return { refIngreso, nombre };
};
