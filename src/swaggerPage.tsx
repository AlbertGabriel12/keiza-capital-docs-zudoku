import SwaggerUI from 'swagger-ui-react';
import swaggerSpec from '../apis/openapi.json';
import 'swagger-ui-react/swagger-ui.css';

export const SwaggerPage = () => {
  return (
    <SwaggerUI spec={swaggerSpec} />
  )
}