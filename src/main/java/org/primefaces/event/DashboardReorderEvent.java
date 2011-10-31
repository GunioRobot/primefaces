/*
 * Copyright 2009,2010 Prime Technology.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
package org.primefaces.event;

import javax.faces.component.UIComponent;
import javax.faces.event.FacesEvent;
import javax.faces.event.FacesListener;

public class DashboardReorderEvent extends FacesEvent {

	private String widgetId;

	private Integer itemIndex;

	private Integer columnIndex;

	private Integer senderColumnIndex;

	public DashboardReorderEvent(UIComponent component, String widgetId, Integer itemIndex, Integer columnIndex, Integer senderColumnIndex) {
		super(component);
		this.widgetId = widgetId;
		this.itemIndex = itemIndex;
		this.columnIndex = columnIndex;
		this.senderColumnIndex = senderColumnIndex;
	}

	public DashboardReorderEvent(UIComponent component) {
		super(component);
	}

	@Override
	public boolean isAppropriateListener(FacesListener faceslistener) {
		return false;
	}

	@Override
	public void processListener(FacesListener faceslistener) {
		throw new UnsupportedOperationException();
	}

	public String getWidgetId() {
		return widgetId;
	}

	public Integer getItemIndex() {
		return itemIndex;
	}

	public Integer getColumnIndex() {
		return columnIndex;
	}

	public Integer getSenderColumnIndex() {
		return senderColumnIndex;
	}
}