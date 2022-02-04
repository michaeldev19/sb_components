import'./myLabel.css';

export interface Props {
    /**
     * Título de la etiqueta 
     */
    label: string;
    /**
     * Tamaño de la etiqueta
     */
    size: 'normal'|'h1'|'h2'|'h3';
    /**
     * Texto capitalizado
     */
    allCaps?: boolean;
    /**
     * Color de la etiqueta
     */
    color?: 'primary'|'secondary'|'tertiary',
    /**
     * Color personalizado del texto
     */
    fontColor?: string;
    /**
     * Color personalizado del texto
     */
    backgroundColor?: string;
}

export const MyLabel = ( { label = 'No Label', size = 'normal', allCaps = false, color = 'primary', fontColor, backgroundColor = 'transparent' }: Props ) => {
  return (
      <span className={ `label ${ size } text-${ color }` } style={{ color: fontColor, backgroundColor }}>{ allCaps ? label.toUpperCase() : label }</span>
  );
};

export default MyLabel;