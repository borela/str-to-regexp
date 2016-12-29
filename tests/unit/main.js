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

import assert from 'assert'
import path from 'path'

import toRegex from '../../src'

describe('String to RegExp conversion function', () => {
  it('converts a pattern without flags', () => {
    // Spaces will be preserved.
    assert.equal(
      toRegex('   pattern   ').toString(),
      new RegExp('   pattern   ').toString()
    )
    // Spaces will be trimmed.
    assert.equal(
      toRegex('   /pattern/   ').toString(),
      new RegExp('pattern').toString()
    )
  })

  it('converts a pattern with flags', () => {
    // Spaces will be trimmed.
    assert.equal(
      toRegex('   /pattern/i   ').toString(),
      new RegExp('pattern', 'i').toString()
    )
  })
})
