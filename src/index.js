// Licensed under the Apache License, Version 2.0 (the “License”); you may not
// use this file except in compliance with the License. You may obtain a copy of
// the License at
//
// http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an “AS IS” BASIS, WITHOUT
// WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied. See the
// License for the specific language governing permissions and limitations under
// the License.

const COMPLEX_BEGIN = /^\s*\//
const COMPLEX_REGEX = /^\s*\/(.+)\/(\w*)\s*$/

function parseWithFlags(fullPattern:string) {
  try {
    let [ , pattern, flags ] = fullPattern.match(COMPLEX_REGEX)
    return flags
      ? new RegExp(pattern, flags)
      : new RegExp(pattern)
  } catch (e) {
    throw new Error(`Invalid pattern “${fullPattern}”.`, e)
  }
}

export function toRegExp(pattern:string) {
  return COMPLEX_BEGIN.test(pattern)
    ? parseWithFlags(pattern)
    : new RegExp(pattern)
}

export default toRegExp
