import { plainToInstance } from 'class-transformer';
import { IsEnum, IsNumber, IsString, validateSync } from 'class-validator';

enum Environment {
  DEVELOPMENT = 'development',
  PRODUCTION = 'production',
  Test = 'test',
  Provision = 'provision',
}

class EnvironmentVariables {
  @IsEnum(Environment)
  NODE_ENV: Environment;

  @IsNumber()
  DB_PORT: number;

  @IsString()
  DB_HOST: string;

  @IsString()
  USERNAME: string;

  @IsString()
  PASSWORD: string;

  @IsString()
  DB_NAME: string;
}

export function validate(config: Record<string, unknown>) {
  console.log('config', config);
  // plainInstance converts plain(literal) object to class (constructor) object . Also works with arrays

  const validatedConfig = plainToInstance(EnvironmentVariables, config, {
    /**
     * enable implicit conversion will tell class-tranformer that if it sees a primitive that is currenty
     * string (like a boolean or a number ) to assume it should be the primitive type instead and transform it,
     * even though @Type(()=> Number) or @Type(()=> Boolean) is not used
     */

    enableImplicitConversion: true,
  });
  console.log('validatedConfig', validatedConfig);

  /**
   *Performs sync validation of the given object.
   * Note that this method completetly ignores any async validations you may have setup.
   * If you want to properly perform validation you need to call validate method instead.
   */
  const errors = validateSync(validatedConfig, {
    skipMissingProperties: false,
  });

  if (errors.length > 0) {
    throw new Error(errors.toString());
  }
  return validatedConfig;
}
