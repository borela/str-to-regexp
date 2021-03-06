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

import { toRegExp } from '..'

describe('toRegExp()', () => {
  it('converts a pattern without flags.', () => {
    // Spaces will be preserved.
    expect(
      toRegExp('   pattern   ').toString()
    ).toBe(
      new RegExp('   pattern   ').toString()
    )
    // Spaces will be trimmed.
    expect(
      toRegExp('   /pattern/   ').toString()
    ).toBe(
      new RegExp('pattern').toString()
    )
  })

  it('converts a pattern with flags.', () => {
    // Spaces will be trimmed.
    expect(
      toRegExp('   /pattern/i   ').toString()
    ).toBe(
      new RegExp('pattern', 'i').toString()
    )
  })

  it('throws an exception on incomplete pattern.', () => {
    expect(() => toRegExp('/pattern')).toThrow(Error)
    expect(() => toRegExp('   /pattern   ')).toThrow(Error)
  })
})
