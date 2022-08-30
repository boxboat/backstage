/*
 * Copyright 2022 The Backstage Authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

export interface Config {
  app: {
    /**
     * Running the frontend app with https
     */
    https?: {
      /**
       * Parent object containing certificate and the private key
       */
      certificate?: {
        /**
         * Https Certificate private key. Use $file to load in a file
         * @visibility secret
         */
        key: string;
        /**
         * Https Certificate. Use $file to load in a file
         * @visibility secret
         */
        cert: string;
      };
    };
  };
}
